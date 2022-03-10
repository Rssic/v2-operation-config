import { CHAIN_ID } from '@synfutures/v2-artifact';
import { kovanBanner } from './banner';
import { Banner } from './types';

/**
 * get banner config by chain id
 * @param chainId
 * @returns
 */
export function getBannerConfig(chainId: CHAIN_ID): Banner[] {
  switch (chainId) {
    case CHAIN_ID.KOVAN: {
      return kovanBanner as Banner[];
    }
    default: {
      throw new Error('Unsupported Network.');
    }
  }
}
