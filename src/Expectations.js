import React, { useState, useEffect } from 'react';
import firebase from './firebase';

function useInfo() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('effects')
      .onSnapshot((snapshot) => {
        const test = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        console.log(test);
      });

  }, [])

  return info;
}

const Expectations = () =>  {
  const info = useInfo();
  return (
    <div>
      expectations...
    </div>
  );
}

export default Expectations;
