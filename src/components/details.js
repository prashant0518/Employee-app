import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

const Details = () => {

    const { id } = useParams();
    const detail = useSelector(state => state.allreducer.employees);
    const data = detail.find((el) => el.id == Number(id));
    if(!data) return null

    const myArr = Object.keys(data);

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src={ data.avatar_url}></img>
                </div>
                <div className="col-md-6">
                    {myArr.map((item) => {
                        return (<>


                            <div class="list-group">
                                {item == "avatar_url" ? "" : <a type="button" href={data[item]} target="_blank" class="list-group-item list-group-item-action text-capitalize " aria-current="true">
                                    {item}
                                </a>}


                            </div>
                        </>
                        )



                    })}

                </div>



            </div>

        </div>
    )
}

export default Details



