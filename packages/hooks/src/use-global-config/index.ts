import { GlobalConfig } from '@element-plus/components/src/config-provider';
import { useContext } from 'react';

export default function useGlobalConfig(key?: string) {
  const global = useContext(GlobalConfig);
  if (key) {
    return global[key];
  }
}
