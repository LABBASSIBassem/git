import React from 'react'

const Profile = (props) => {
    return (
        <div>
            {props.ba(props.fullName)}
            <p>Name: {props.fullName}</p>
            <p>bio: {props.bio}</p>
            <p>profession: {props.pro}</p>
            <img src={props.children} />
            
        </div>
    )
}

export default Profile
