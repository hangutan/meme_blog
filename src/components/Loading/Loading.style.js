import styled from 'styled-components';

export const StyleLoadingContainer = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    ${(props)=>{
        if(props.isLoading){
            return `
                opacity:1;
                visibility: visible;
            `
        }else{
            return`
                opacity:0;
                visibility: hidden;
            `
        }
    }};
    transition:all 0.3s ease;
    background-color:rgba(255,255,255,0.5);
`;

export const StyleSVG = styled.svg`
    margin:auto;
    display:block;
    width:150px;
    height:150px;
`;
