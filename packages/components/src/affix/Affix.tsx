import React, { useEffect, useMemo, useRef, useState, PropsWithChildren } from 'react';
import { useEventListener } from 'ahooks';
import { isFunction } from 'lodash';
import { getScrollContainer } from './utils';

export interface AffixProps {
  zIndex?: number | string;
  target?: any;
  offset?: number;
  position?: 'top' | 'bottom';
  onScroll?: ({ scrollTop, fixed }: { scrollTop: number; fixed: boolean }) => boolean;
  onChange?: (fixed: boolean) => boolean;
}

const Affix: React.FC<PropsWithChildren<AffixProps>> = props => {
  const target = useRef<any>(null);
  const root = useRef<any>(null);
  const scrollContainer = useRef<any>(null);
  const { zIndex = 100, position = 'top', offset = 0 } = props;
  const [state, setState] = useState({
    fixed: false,
    height: 0, // height of root
    width: 0, // width of root
    scrollTop: 0, // scrollTop of documentElement
    clientHeight: 0, // clientHeight of documentElement
    transform: 0,
  });
  const rootStyle = useMemo<React.CSSProperties>(
    () => ({
      height: state.fixed ? `${state.height}px` : '',
      width: state.fixed ? `${state.width}px` : '',
    }),
    [state.fixed, state.height, state.width],
  );

  const affixStyle = useMemo<React.CSSProperties>(() => {
    if (!state.fixed) return {};

    const _offset = offset ? `${offset}px` : 0;
    const transform = state.transform ? `translateY(${state.transform}px)` : '';

    return {
      height: `${state.height}px`,
      width: `${state.width}px`,
      top: position === 'top' ? _offset : '',
      bottom: position === 'bottom' ? _offset : '',
      transform,
      zIndex,
    };
  }, [state.fixed, state.transform, state.height, state.width, offset, position, zIndex]);
  const update = () => {
    if (!root.current || !target?.current || !scrollContainer.current) return;

    const rootRect = root.current.getBoundingClientRect();
    const targetRect = target.current.getBoundingClientRect();
    setState(old => ({
      ...old,
      height: rootRect.height,
      width: rootRect.width,
      scrollTop:
        scrollContainer.current instanceof Window
          ? document.documentElement.scrollTop
          : scrollContainer.current.scrollTop || 0,
      clientHeight: document.documentElement.clientHeight,
    }));
    if (position === 'top') {
      if (props.target) {
        const difference = targetRect.bottom - offset - state.height;
        setState(old => ({
          ...old,
          fixed: offset > rootRect.top && targetRect.bottom > 0,
          transform: difference < 0 ? difference : 0,
        }));
      } else {
        setState(old => ({
          ...old,
          fixed: offset > rootRect.top,
        }));
      }
    } else {
      if (props.target) {
        const difference = state.clientHeight - targetRect.top - offset - state.height;
        state.fixed =
          state.clientHeight - offset < rootRect.bottom && state.clientHeight > targetRect.top;
        setState(old => ({
          ...old,
          transform: difference < 0 ? -difference : 0,
        }));
      } else {
        setState(old => ({
          ...old,
          fixed: state.clientHeight - offset < rootRect.bottom,
        }));
      }
    }
  };
  const onScroll = () => {
    update();
    if (isFunction(props.onScroll)) {
      props.onScroll({
        scrollTop: state.scrollTop,
        fixed: state.fixed,
      });
    }
  };

  useEventListener('scroll', onScroll, { target: scrollContainer.current });

  useEffect(() => {
    if (props.target) {
      target.current = document.querySelector<HTMLElement>(props.target) ?? undefined;
      if (!target.current) {
        throw new Error(`Target is not existed: ${props.target}`);
      }
    } else {
      target.current = document.documentElement;
    }
    scrollContainer.current = getScrollContainer(root.current!, true);
  }, [props.target]);

  useEffect(() => {
    if (isFunction(props.onChange)) {
      props.onChange(state.fixed);
    }
  }, [props.onChange, state.fixed]);
  return (
    <div ref={root} className="el-affix" style={rootStyle}>
      <div className={state.fixed ? 'el-affix--fixed' : ''} style={affixStyle}>
        {props.children}
      </div>
    </div>
  );
};

export default Affix;
