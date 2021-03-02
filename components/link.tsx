interface ILink {
    target?:String;
    link:String;
    text: String;
}

const Link: React.FC<ILink> = ({link, target, text}) => <a href={`${link}`} target={`${target ?? ''}`}>{text}</a>

export default Link