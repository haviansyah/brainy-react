import React from 'react';
// import ReactWOW from 'react-wow';
import styled from "styled-components";

export default function Portfolio(){

    const portofolio_list = [
        ["App K3 PLTU Lontar","smart-secure.jpg"],
        ["Realtime Monitor PLTU","realtimedcs.jpg"],
        ["Website Sekolah Citabuana","citabuana.jpg"],
        ["Signage Meeting Room","kemaritiman.jpg"],
    ]

    return (
        <Wrapper>
            <div className="container">
                <h1 className="title">our latest project.</h1>

                <div className="row">
                    {
                        portofolio_list.map((porto,id) =>
                            <div className="col-6 col-md-3" key={id}>
                                <div className="card">
                                    <img src={"/photos/project/"+porto[1]} alt={porto[0]}/>
                                    <span>{porto[0]}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Wrapper>
    );
   
}

const Wrapper = styled.div`
    margin-top: 80px;
    background-color: #A49FEA;
    padding: 60px 0px;
    
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1{
            color : white;
            font-weight: 800;
        }

        .row{
            margin-top : 3em;
            .card{     
                padding : 10px;
                background-color : white;

                img{
                    width: 100%;
                    height: auto;
                }

                span{
                    margin-top: 1em;
                    text-align: center;
                    font-weight: bold;
                }
            }
        }
    }
`;