import Brochure from './brochure';
import { useRef, useState } from 'react';
import exportAsImage from './utils/exportAsImage';
import './style.css'

function App() {
  const downloadRef = useRef()
  const [bodyForm, setBodyForm] = useState({
    judul_1: 'PELATIHAN DARING',
    judul_2: 'UMKM MELEK DIGITAL',
    gambar_1: '/img-1.jpg',
    gambar_2: '/img-2.jpg',
    narator_1: 'Harumi',
    pekerjaan_narator_1: 'Dosen',
    foto_narator_1: '/orang.webp',
    narator_2: 'Ketut Sosilo',
    pekerjaan_narator_2: 'Pengusaha',
    foto_narator_2: '/orang.webp',
    pembawa_acara: 'Cahaya Dewi',
    pekerjaan_pembawa_acara: 'Pengurus',
    foto_pembawa_acara: '/orang.webp',
    tanggal: `Friday, 3 September 2022`,
    jam: '20:00',
    nama_application: 'Google Meet',
    link: 'bit.ly/123',
    fasilitas: 'E-Sertifikat,Ilmu yang bermanfaat',
    nama_file: 'brosur',
  })

  const handleChange = (e) => {
    console.log(e.target.type);


    if (e.target.type === 'file') {
      const objectUrl = URL.createObjectURL(e.target.files[0])
      setBodyForm({ ...bodyForm, [e.target.name]: objectUrl })
    } else if (e.target.name === 'tanggal') {
      const day = new Date(e.target.value).toLocaleString('default', { weekday: 'long' })
      const month = new Date(e.target.value).toLocaleString('default', { month: 'long' })
      const date = new Date(e.target.value)

      setBodyForm({ ...bodyForm, tanggal: `${day}, ${date.getDate()} ${month} ${date.getFullYear()}` })
    }
    else {
      setBodyForm({ ...bodyForm, [e.target.name]: e.target.value })
    }
  }

  const handleDownload = (e) => {
    e.preventDefault()

    exportAsImage(downloadRef.current, bodyForm.nama_file)

  }

  return (
    <div className='container' >
      <div className='form-wrapper' >
        <form action="" method="post">
          <div className="input-group">
            <label htmlFor="judul_1">Judul 1</label>
            <input type="text" name='judul_1' id='judul_1' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="judul_2">Judul 2</label>
            <input type="text" name='judul_2' id='judul_2' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="gambar_1">Gambar 1</label>
            <input type="file" name='gambar_1' id='gambar_1' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="gambar_2">Gambar 2</label>
            <input type="file" name='gambar_2' id='gambar_2' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="narator_1">Narator 1</label>
            <input type="text" name='narator_1' id='narator_1' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="pekerjaan_narator_1">Pekerjaan Narator 1</label>
            <input type="text" name='pekerjaan_narator_1' id='pekerjaan_narator_1' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="foto_narator_1">Foto Narator 1</label>
            <input type="file" name='foto_narator_1' id='foto_narator_1' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="narator_2">Narator 2</label>
            <input type="text" name='narator_2' id='narator_2' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="pekerjaan_narator_2">Pekerjaan Narator 2</label>
            <input type="text" name='pekerjaan_narator_2' id='pekerjaan_narator_2' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="foto_narator_2">Foto Narator 2</label>
            <input type="file" name='foto_narator_2' id='foto_narator_2' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="pembawa_acara">Pembawa Acara</label>
            <input type="text" name='pembawa_acara' id='pembawa_acara' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="pekerjaan_pembawa_acara">Pekerjaan Pembawa Acara</label>
            <input type="text" name='pekerjaan_pembawa_acara' id='pekerjaan_pembawa_acara' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="foto_pembawa_acara">Foto Pembawa Acara</label>
            <input type="file" name='foto_pembawa_acara' id='foto_pembawa_acara' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="tanggal">Tanggal</label>
            <input type="date" name='tanggal' id='tanggal' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="jam">Jam</label>
            <input type="time" name='jam' id='jam' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="nama_application">Nama Aplikasi untuk Acara</label>
            <input type="text" name='nama_application' id='nama_application' placeholder='contoh : Google Meet' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="link">Link Acara</label>
            <input type="text" name='link' id='link' onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="fasilitas">Fasilitas</label>
            <textarea name='fasilitas' id='fasilitas' cols="30" rows="10" placeholder='Pisahkan dengan koma' onChange={handleChange} ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="nama_file">Nama File</label>
            <input type="text" name='nama_file' id='nama_file' onChange={handleChange} />
          </div>
          <div className='download-btn-wrapper' >
            <button className='download-btn' onClick={handleDownload} >Download</button>
          </div>
        </form>
      </div>
      <Brochure
        downloadRef={downloadRef}
        bodyForm={bodyForm}
      />
    </div>
  );
}

export default App;
