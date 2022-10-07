import './style.css'

const Brochure = ({downloadRef, bodyForm}) => {

    return (
        <div className='brochure' ref={downloadRef} >
            <div className="title">
                <div className="up">{bodyForm.judul_1}</div>
                <div className="bottom">{bodyForm.judul_2}</div>
            </div>
            <div className="middle-part">
                <div className="photo">
                    <div className='up' >
                        <img src={bodyForm.gambar_1} alt="" />
                    </div>
                    <div className='bottom' >
                        <img src={bodyForm.gambar_2} alt="" />
                    </div>
                </div>
                <div className="people">
                    <div className="narasumber">
                        <p className='title' >Narasumber</p>
                        <div>
                            <ul className='name' >
                                <li>{bodyForm.narator_1}</li>
                                <li>{bodyForm.pekerjaan_narator_1}</li>
                            </ul>
                            <div>
                                <img src={bodyForm.foto_narator_1} alt="" width={200} />
                            </div>
                        </div>
                        <div>
                            <ul className='name' >
                                <li>{bodyForm.narator_2}</li>
                                <li>{bodyForm.pekerjaan_narator_2}</li>
                            </ul>
                            <div>
                                <img src={bodyForm.foto_narator_2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="pembawa_acara">
                        <p className='title' >Pembawa Acara</p>
                        <div>
                            <ul className='name' >
                                <li>{bodyForm.pembawa_acara}</li>
                                <li>{bodyForm.pekerjaan_pembawa_acara}</li>
                            </ul>
                            <div>
                                <img src={bodyForm.foto_pembawa_acara} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-part">
                <div className="card">
                    <div>
                        <div><i class="fa fa-calendar"></i></div>
                        <div>
                            <ul style={{ listStyleType: 'none', marginLeft: -25 }} >
                                <li>{bodyForm.tanggal}</li>
                                <li>{bodyForm.jam}</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div><i class="fa fa-map-marker"></i></div>
                        <div>
                            <ul style={{ listStyleType: 'none', marginLeft: -25 }} >
                                <li>{bodyForm.nama_application}</li>
                                <li>{bodyForm.link}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <p>Fasilitas</p>
                        <hr />
                    </div>
                    <div>
                        <ul style={{ listStyleType: 'circle' }} >
                            {
                                bodyForm?.fasilitas.split(',').map(fas => (<li>{fas}</li>))
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brochure