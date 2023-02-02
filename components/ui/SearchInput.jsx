import { useState } from 'react';
import { IonInput } from '@ionic/react';

function SearchInput() {
  const [search, setSearch] = useState('');

  return (
    <>
      <div>Searching for {search}</div>
      <IonInput
        placeholder="Apple, AAPL"
        clearInput={true}
        value={search}
        onIonChange={e => setSearch(e.target.value)}
      />
    </>
  );
}

export default SearchInput;
