// library import
import { useEffect, useState } from "react";
import NetInfo, { NetInfoState, NetInfoSubscription } from "@react-native-community/netinfo";

type UseNetworkStatusReturnType = boolean | null;

const useNetworkStatus = (): UseNetworkStatusReturnType => {
  const [hasNetwork, setHasNetwork] = useState<UseNetworkStatusReturnType>(null);

  useEffect(() => {
    let unsubscribe: NetInfoSubscription | undefined;

    const handleNetworkStateChange = (state: NetInfoState) => {
      setHasNetwork(state.isConnected ?? null);
    };

    const subscribeToNetworkState = async () => {
      unsubscribe = NetInfo.addEventListener(handleNetworkStateChange);
    };

    subscribeToNetworkState();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return hasNetwork;
};

export default useNetworkStatus;
