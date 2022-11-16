import { GlobalConfig, GlobalConfigTypes } from '@element-plus/components/src/config-provider';
import { useContext } from 'react';

export default function useGlobalConfig(key?: keyof GlobalConfigTypes) {
  const global = useContext<GlobalConfigTypes>(GlobalConfig);
  if (key) {
    return global[key];
  }
  return global
}
