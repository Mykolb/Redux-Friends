import React from 'react';

const FriendsList = props => {
    return (
        <div className='friendslist'>
        {props.friends.map(friends => 
            {
                return(
                    <div>
                    <p>{friends.name}</p>
                    <p>{friends.age}</p>
                    <p>{friends.email}</p>


                    </div>
                )


            })}



        </div>
    )
}