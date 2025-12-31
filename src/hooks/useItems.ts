import { useEffect, useState } from "react";
import type { Item, ItemsResponse } from "~/types";

interface UseItemsReturn {
  data: Item[];
  loading: boolean;
  error: Error | null;
}

export const useItems = (endpoint: string): UseItemsReturn => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchItems = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`Failed to fetch items: ${response.statusText}`);
        }

        const result: ItemsResponse = await response.json();

        if (isMounted) {
          setData(result.items || []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchItems();

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return { data, loading, error };
};
