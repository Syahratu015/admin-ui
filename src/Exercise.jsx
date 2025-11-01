import React from 'react';
import UserCard from './UserCard';

export default function Exercise() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">User Cards</h1>

      <div className="flex justify-center gap-6">
        <UserCard
          name="Syahratu"
          email="ratu@example.com"
          street="Jl. Melati No. 10"
          city="Pekalongan"
        />
        <UserCard
          name="Andhara"
          email="andhara@example.com"
          street="Jl. Mawar No. 12"
          city="Semarang"
        />
        <UserCard
          name="Satriani"
          email="satriani@example.com"
          street="Jl. Kenanga No. 7"
          city="Jakarta"
        />
      </div>
    </div>
  );
}
