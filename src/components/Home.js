import React from 'react'

const Home=()=> {
  const firstName = "Seamoon";
  const secondName = "Pandey";
  return (
    <div className='container' id='intro' >
      <div id='heading'>
        <h1><p><strong>Hi!</strong> everyone I am {firstName} {secondName}</p></h1>
      </div>

      <div className='container' >
        <p id='description'>
          I am a typical Tech loving guy who likes to spend time on the internet and computer stuffs.
          I enjoy my day mostly learning new techniques and ideas plus I love cultivating my habit on coding and studying.
          <hr /></p>
      </div>
    </div>
  )
}

export default Home