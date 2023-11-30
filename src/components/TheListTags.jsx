import {posts} from '../../postDb'

const arrayTag = []

const filterPost = posts.map((post)=>{
    const filterTag = post.tags.map((tag)=>{
        return arrayTag.push(tag)
    })
})


const tag = arrayTag.filter((tag, index)=>{
    return arrayTag.indexOf(tag) === index
})


export default function TheListTags(){
    return (
    <ul>LISTA TAG SENZA RIPETIZIONI:
        {tag.map((elem)=>{
           return(   
                <li>
                    {elem}
                </li>
           )    
          })
        } 
    </ul>
 )
}