import Link from 'next/link';
import Image from 'next/image';

import RecipeCardStyled from './RecipeCard.styled';

export default function RecipeCard(props){
    return(
        <figure className="recipe-card" >
            <style jsx>{RecipeCardStyled}</style>
            <Link href={props.link} >
                <a>
                    <Image 
                        className="recipe-picture" 
                        src={props.picture} 
                        alt={props.name}
                        width={345}
                        height={200}
                    />
                </a>
            </Link>
            <div className="recipe-category" >
                {props.category}
            </div>
            <figcaption className="recipe-name" >
                {props.name}
            </figcaption>
        </figure>
    )
}