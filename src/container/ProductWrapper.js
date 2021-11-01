import styled from "styled-components";

export const ProductWrapper = styled.div`
    .card-footer {
        border-top: transparent;
        background-color: #fffef1;
        border-radius: 20px;
        position: relative;
        bottom: 0;
    }
    .card-footer p {
        font-size: 18px;
    }
    .card-footer h5 {
        color: red;
        font-size: 17px; 
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .card-footer {
            background-color: rgba(247, 247, 247);
        }
        .card-footer p {
            color: red;
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .cart-btn {
        position: absolute;
        bottom: 60px;
        right: 70px;
        font-size: 20px;
        background-color: #FF0000;
        border: 1px white solid;
        color: white;
        transform: translate(100%, 100%);
    }
    .card-img-top {
        width: 100%;
        height: 200px;
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .link {
        text-decoration: none;
        color: black;
    }
    .card {
        height: 375px;
        position: relative;
        display: flex;
        flex-flow: column;
        width: 100%;
        border-radius: 20px;
    }
`