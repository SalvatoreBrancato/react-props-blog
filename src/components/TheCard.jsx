const posts = [
    {
        id: 1,
        title: "Titolo del Post",
        image: 'https://picsum.photos/600/400',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["html", "css"],
        published: true,
    },
    {
        id: 2,
        title: "Titolo del Post",
        image: 'https://picsum.photos/600/400',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["js", "css"],
        published: true,
    },
    {
        id: 3,
        title: "Titolo del Post",
        image: 'https://picsum.photos/600/400',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["js", "php"],
        published: true,
    },
    {
        id: 4,
        title: "Titolo del Post",
        image: 'https://picsum.photos/600/400',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["html"],
        published: false,
    },
];


function InfoCard(props) {
    return (
        <div className={`flex justify-center items-center ${props.published ? '' : 'hidden'}`}>
            <div className="box-post border-solid border-2 border-indigo-600">
                <img src={props.image} alt="img" />
                <h1 className="m-1">{props.title}</h1>
                <p className="m-1">{props.content}</p>
                <ul>
                {props.tags.map((tag)=>{
                    return(
                        <li>{tag}</li>
                    )
                })}
                </ul>
                <button className="btn-primary m-1">Leggi di più</button>
            </div>
        </div>
    ) 
}

export default function TheCard() {
    return (
        posts.map((post) => {
            return (
                <InfoCard
                key = {post.id}
                image = {post.image}
                title={post.title}
                content = {post.content}
                published = {post.published}
                tags = {post.tags}
                />
            )
        })
    );
}