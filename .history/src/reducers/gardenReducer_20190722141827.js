import uuid from 'uuid/v1'

export const gardenReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PLANT':
            return [...state, {
                desc: action.plant.desc,
                name: action.plant.name,
                image: action.plant.image,
                id: uuid(),
                irrigation: 25
            }]
        case 'REMOVE_PLANT':
            return state.filter(plant => plant.id !== action.id)
        case 'STARTTIME_PLANT':
                var timerId, percent;
                percent = 0;
                $('#pay').attr('disabled', true);
                $('#load').css('width', '0px');
                $('#load').addClass('progress-bar-striped active');


                timerId = setInterval(function() {

                  // increment progress bar
                  percent += 5;
                  $('#load').css('width', percent + '%');
                  $('#load').html(percent + '%');


                  // complete
                  if (percent >= 100) {
                    clearInterval(timerId);
                    $('#pay').attr('disabled', false);
                    $('#load').removeClass('progress-bar-striped active');
                    $('#load').html('payment complete');

                    // do more ...

                  }

                }, 200);

                return state.filter((plant) => {
                    if (plant.id === action.id) {
                      return Object.assign({}, plant, {
                          setInterval(())
                        irrigation: plant.irrigation++
                      })
                    }
                    return plant
                  })

        default:
            return state
    }
}
