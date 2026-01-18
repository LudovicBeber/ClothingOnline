import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAsyncStorageState(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger la valeur au montage
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const stored = await AsyncStorage.getItem(key);
        console.log("DATA STORED: ", stored);
        if (stored !== null) {
          setValue(JSON.parse(stored));
        }
      } catch (err) {
        console.error('Erreur AsyncStorage (load):', err);
        setError('Impossible de charger les données.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [key]);

  // Sauvegarder à chaque changement de value
  const updateValue = async (newValue) => {
    try {
      setValue(newValue);
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
        console.log("DATA UPDATED: ", newValue)
    } catch (err) {
      console.error('Erreur AsyncStorage (save):', err);
      setError('Impossible de sauvegarder les données.');
    }
  };

  return { value, setValue: updateValue, loading, error };
}
