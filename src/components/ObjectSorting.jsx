
const ObjSort = () => {
    return (
        <div className="row">
            <div class="col-12 col-md-6">
                <h1>Sort an array of objects</h1>
                <p class="lead">Given an array of city data. Write a function that takes an array of objects as a
                    parameter. Sort the objects by population in desc order. Display the newly sorted array.
                </p>
                <p><strong>Extra Credit:</strong><br />
                    Sort the city data by the population ascending order<br/>
                    Sort the city data by the city name<br />
                    Sort the city data by median age<br />
                </p>
                <div class="mt-1 text-end">
                    {/* <!-- <div>
                        <input type="radio">Median Age</input>
                        <input type="radio">Population</input>
                        <input type="radio">City Name</input>
                    </div> --> */}
                    <button id="btnSubmit" type="button" class="btn btn-warning">Display Data</button>
                </div>
                <div class="mt-2">
                    <table class="table table-striped table-dark table-hover">
                        <thead>
                            <th>City</th>
                            <th>State</th>
                            <th>Population</th>
                            <th>Median Age</th>
                            <th>Avg Household Size</th>
                        </thead>
                        <tbody id="results">
                            {/* results go here */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div  className="objSearch">
            </div>
        </div>
    )
};

export default ObjSort;