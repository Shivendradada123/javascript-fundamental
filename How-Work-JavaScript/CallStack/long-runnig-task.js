
            function longRunning(){
            let a = 0;
            for(let j = 0; j<1e9; j++){
              a++
              
            }
            console.log('long task done');


            };

            function impTask(){
              console.log('imp first run');
              
            };

            longRunning();
            impTask();

            console.log('3');
