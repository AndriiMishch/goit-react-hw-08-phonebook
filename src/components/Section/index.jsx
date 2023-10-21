import { Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
}