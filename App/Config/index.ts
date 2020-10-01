/* config by environment  */
const current_environment = 'development';

/* setting configuration environment  */
const environment = {
  'production': {
    'app_host': 'http://localhost/satu_data/api/',
    // add some data here

  },
  'development': {
    'app_host': 'http://localhost/satu_data/api/',
    'app_name': 'sistem satu data',
    // add some data here
  }
};


/* ecport it  */
export default environment[current_environment] ?? environment['development'];