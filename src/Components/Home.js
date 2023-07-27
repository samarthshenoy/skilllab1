import React from 'react';
import ca1 from '../Images/ca1.jpg'
import ca2 from '../Images/ca2.jpg'
import ca3 from '../Images/ca3.jpeg'
import './Home.css'
import {Carousel} from 'react-bootstrap'

const Home = () => {
    return(
           
                <div className="fullpg vh-100">
                <div>
                    
                <div className='d-flex justify-content-center mt-2'>
                   <Carousel className='caros'>
                       <Carousel.Item className='car1 text-center'>
                         <img src={ca1} alt='' className='imgcar'></img>
                        <br/><br/><br/>
                        <Carousel.Caption className='car1 text-center'>
                         <h5>burggr</h5>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='car2 text-center'>
            <img src={ca2} alt='' className='imgcar'></img>
              <br/><br/><br/>
              <Carousel.Caption className='car1 text-center'>
                         <h5>indian thali</h5>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='car3 text-center'>
            <img src={ca3} alt='' className='imgcar'></img>
              <br/>
              <Carousel.Caption className='car1 text-center'>
                         <h5>Butter Masala Dosa</h5>
            </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
                </div>
                <hr/>
<div> <h2 class="txt1 text-center"> Some Top Picks in Mangalore!!</h2><br/></div>
                <div>
                <div class="container">
    <div class="row mt-3 px-2">
    <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="https://th.bing.com/th/id/ALs4eR62d8TAPTQ480x360?&rs=1&pid=ImgDet" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>The Ocean Pearl</h4><br/></div>
                    <p calss="card-content">The Ocean Pearl hotel at Mangalore combines classic luxury, modern indulgences and exquisite comfort set in a spectacular backdrop that includes a unique combination of breath-taking views combined with plush spaces and facilities, excellent service and a promise of enjoying Mangalore like never before....</p>
                    <button class="btn btn-outline-success btn-sm"> Explore Now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-primary-subtle">
            <img src="https://tse3.mm.bing.net/th?id=OIP.-GqG0IzAu6uexnv1b5ARtwHaE9&pid=Api&P=0&h=180=" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>New Tajmhal</h4><br/></div>
                    <p calss="card-content">The  Mangalore presents an environment of an oasis of serenity, where each individual is given service with unobtrusive consideration and care. The commitment to impeccable service expresses itself in the meticulous attention to detail in the co-ordination of everything from business appointments to travel arrangements... </p>
                    <button class="btn btn-outline-success btn-sm"> Explore Now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-danger-subtle">
            <img src="https://tse2.mm.bing.net/th?id=OIP.L0p7BA88dk3Zadn6dgOFKwAAAA&pid=Api&P=0&h=180" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"><h4>GoldenFinch</h4><br/></div>
                    <p calss="card-content">Goldfinch Hotels currently has a network of 6 of the finest boutique hotels spread across Bengaluru, Delhi, Mangalore & Mumbai with strategic locations. </p>
                    <button class="btn btn-outline-success btn-sm"> Explore Now </button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<br/>
<div>
    <h4 class="txt1 px-5">Some more picks for you...</h4>
</div>
<div><div class="container">
        <button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#test">Explore now</button>
        <div class="collapse " id="test">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae, vitae tempora libero ipsa recusandae,
            laboriosam illo blanditiis doloribus esse iusto suscipit iure delectus accusamus, nulla voluptate est sed
            cum!
        </div>
    </div>
    </div>
    <script src="js/bootstrap.bundle.js"></script>
</div>
          
    );
}
export default Home;