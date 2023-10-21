export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {person.name}
    </h2>
    <p className="Person__age">
      I am
      {person.age}
    </p>
    {person.married ? (
      <p>
        {person.partnerName}
        is my
        {person.sex === 'm' ? 'wife' : 'husband'}
      </p>
    ) : (
      <p>
        I am not married.
      </p>
    )}
    {married}
  </section>
);
