import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1 class="title">Foreign Exchange Calculator</h1>
		<section>
	       GBP: <input />
     	</section>
     	<section>
			 <h2>Converted</h2>
		 <ul>
         <li>
           <p><strong>EUROS:</strong>1.20</p>
         </li>
         <li>
           <a href="/new" class="button">Add new currency</a>
         </li>
       </ul>
     </section>
	</div>
);


export default Home;
