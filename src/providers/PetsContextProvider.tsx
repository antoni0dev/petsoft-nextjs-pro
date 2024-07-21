'use client';

import { Pet } from '@/lib/types';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { createContext } from 'react';

type PetsContextType = {
  pets: Pet[];
  selectedPetId: number | null;
  selectedPet: Pet | null;
  handleChangeSelectedPetId: (petId: number) => void;
  handleSetPets: (pets: Pet[]) => void;
};

const PetsContext = createContext<PetsContextType | null>(null);

export const usePetContext = () => {
  const context = useContext(PetsContext);

  if (!context) {
    throw new Error('usePetContext must be used within a PetsContextProvider');
  }

  return context;
};

type PetsContextProviderProps = {
  petsData: Pet[];
  children: React.ReactNode;
};

const PetsContextProvider = ({
  petsData,
  children,
}: PetsContextProviderProps) => {
  const [pets, setPets] = useState<Pet[]>(petsData);
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);
  const selectedPet = pets.find((pet) => pet.id === selectedPetId) || null;

  const handleSetPets = (pets: Pet[]) => setPets(pets);
  const handleChangeSelectedPetId = (petId: number) => setSelectedPetId(petId);

  const value = useMemo(
    () => ({
      pets,
      selectedPetId,
      handleChangeSelectedPetId,
      handleSetPets,
      selectedPet,
    }),
    [pets, selectedPetId, selectedPet]
  );

  // ref for synchronizing pets with petsData
  const prevPetsData = useRef(petsData);
  if (prevPetsData.current !== petsData) {
    setPets(petsData);
    return;
  }

  return <PetsContext.Provider value={value}>{children}</PetsContext.Provider>;
};

export default PetsContextProvider;
