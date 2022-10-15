import React from 'react';
import styled from 'styled-components'

const Like = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.red};
  width: auto;
  
  svg {
    fill: ${({ theme }) => theme.colors.red};
  }
`;

export const Likes = ({ likes }) => {

  return (
    <>
      <Like>
        <svg width={27} height={27}>
          <path d="M16.5 3A5.625 5.625 0 0 0 12 5.25 5.625 5.625 0 0 0 1.875 8.625c0 6.74 9.366 12.056 9.76 12.281A.73.73 0 0 0 12 21a.712.712 0 0 0 .366-.094 29.457 29.457 0 0 0 4.828-3.525c3.272-2.944 4.931-5.887 4.931-8.756A5.625 5.625 0 0 0 16.5 3Z" />
        </svg>
        <span>{likes}</span>
      </Like>
    </>
  );
};



