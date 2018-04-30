# Scottish Witchcraft
###### ... because of course..
This project is scaffolded from a create-react-app base. It shows 2 charts which must have correct files loaded to display. Both files needed are in the source code under ```src/csv/```

The first chart is a react-vis line-chart showing us that most marital status of the accused was unknown.

Next we have a bar chart created with raw svg that tells us the devil was mostly through of as a male.

###### obvious downsides
1. No tests
2. stock use of react-vis
3. non-responsive. wide desktop only
4. Only 2 data points used and no interesting joins from other tables
5. Linting
6. No interesting data flows. CSVLoader uploads state to Data.js and only gets passed down to direct decendants.

### data as an mdb file
 So our first stop is
 [mdbtools](https://github.com/brianb/mdbtools) which I found from the AUR package repo.

I wanted to pull all of the tables into CSV files.

<code>mdb-export dbfilename tablename > output.csv</code>gives us an individual table. But there are 36 so I wrote a function that created a single terminal command to get them all.

```javascript
function makeTerminalCommands(input) {
  input = input.replace(/WDB_/g, '')
                .split(" ");
  let first = 'mdb-export Witchcraftsurvey_download.mdb WDB_';
  let third = " > ";
  let fifth = ".csv";
  let composite = "";

  input.forEach(elem => {
    composite += first + elem + third + elem + fifth + ' && ';
  });
  return composite;
}
```
...where input is `mdb-tables dbfilename`




### Converting CSV to an array of objects

react-csv-reader gives our data component all of our data loaded as this.state.data whenever we drag a specific csv into our loader.
Now we get to play...

I start with Accused.csv
```javascript
this.state.data[0][23]  //Marital Status
this.state.data[3][23]  //Married
this.state.data[4][23]  //Widowed
this.state.data[9][23]  //empty value..
this.state.data.length //3,221 entries..
```
 <code>data[0][0]</code> tells us what filename we have so I can redirect traffic to different functions then. In this case, I've only accommodated for Accused and Devil Appearance
### First Chart
When you select Accused.csv, the first chart populates with Stats on the accused Marital Status.

### Second Chart
When you select DevilAppearance.csv, the second chart becomes visible. It receives props passed which get fed to SVG parameters.


## Stretch Features
0. Remove the small black marks from the 2nd chart pre-csvLoad
1. tests
2. linting
3. properly labeled axis on line charts
4. map cities with case amounts
5. Drag time passing while updating case dates on a city map
6. Responsive down to mobile

#### Thanks to..
Julian Goodare, Lauren Martin, Joyce Miller and Louise Yeoman who curated the dataset. 
