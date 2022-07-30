import React, { useState } from 'react'

const Landing = () => {
  const [id, setId] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    if (id === '') {
      return alert('Please fill in all fields');
    } else {}
    if (id.length != 9) {
      return alert('Please fill the complete id');
    } else {}

    console.log(id);
  };

  return (
    <React.Fragment>
        <header className='header'>
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5 col-sm-5 col-xs-5">
                <i class="fa-solid fa-file-contract fa-10x"></i>
              </div>
              <div className="col-md-9 content-box hero-content">
                {/* <span></span> */}
                <h1>Here is a safe way to <br/> store documents.</h1>
                <br/>
                <h3>Search documents with your ID</h3>
                <div className='row'>
                  <form onSubmit={onSubmit}>
                    <input
                      className='search'
                      placeholder="989989989"
                      value={id}
                      type='number'
                      onChange={(e) => setId(e.target.value)}
                    />
                    <button
                      type="submit"
                      className='search-btn'
                    >
                    <i class="fa-solid fa-magnifying-glass fa-lg" style={{color: "white"}}></i>
                    </button>
                  </form>
                </div>
                <br/>
                <span>text</span>

              </div>
            </div>
          </div>
        </section>
      </header>
    </React.Fragment>
  )
}

export default Landing
