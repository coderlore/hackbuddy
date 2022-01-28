interface ILink {
  target?: string;
  link: string;
  text: string;
}

const Link: React.FC<ILink> = ({ link, target, text }) => (
  <a href={`${link}`} target={`${target ?? ''}`}>
    {text}
  </a>
);

export default Link;
