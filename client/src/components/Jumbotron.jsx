import React from 'react';

const Jumbotron = () => {
    return (
        <div className="row mt-3">
            <div className="col-md-12">
                <div class="jumbotron jumbotron-fluid bg-dark text-white text-center">
                    <div class="container">
                        <h1 class="display-4" style={{fontFamily: 'Fredericka the Great, cursive'}}>Writer's Basement</h1>
                        <p class="lead" style={{fontFamily: 'Fredericka the Great, cursive'}}>Share Your Nightmares</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;