import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story'


function Stories() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [];

    function createRandomUser() {
      return {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      };
    }

    Array.from({ length: 20 }).map(() => {
      suggestions.push(createRandomUser());
    });


    setSuggestions(suggestions)
  }, []);

  return (
    <div>
      {suggestions.map(profile => (
        <Story key={profile.userId} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  )
}

export default Stories