import {posts} from '../../postDb'

function InfoCard(props) {
    return (
        <div className={`flex justify-center items-center ${props.published ? '' : 'hidden'}`}>
            <div className="box-post border-solid border-2 border-indigo-600">
                <img src={props.image} alt="img" />
                <h1 className="m-1">{props.title}</h1>
                <p className="m-1">{props.content}</p>
                <ul>
                    <ColorTag
                    tags = {props.tags}
                />
                </ul>
                <button className="btn-primary m-1">Leggi di più</button>
            </div>
        </div>
    ) 
}


function ColorTag(props){
    return(
        props.tags.map((tag)=>{
            return(
                <li className=
                    {`
                    ${tag == "html" ? "text-red-500" : 
                        tag =="css" ? "text-yellow-600":
                        tag =="js" ? "text-green-600":
                        tag == "php" ? "text-blue-800": "" }
                    `}>
                    {tag}
                </li>
            )
        })
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