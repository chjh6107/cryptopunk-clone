import React from 'react'
import styled from 'styled-components';
import CollectionCard from './CollectionCard';

const PunkListBlock = styled.div`
    display: flex;
    overflow: scroll;
`;

const PunkList = ({punkListData}:any) => {
    return(
        <PunkListBlock>
            {punkListData.map((punk:any)=>(
                <div key={punk.token_id}>
                    <CollectionCard 
                        key={punk.token_id}
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_url}
                    />
                </div>
            ))}
        </PunkListBlock>
    );
}

export default PunkList;