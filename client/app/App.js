import { AppState } from './AppState.js';
import { AuthController } from './controllers/AuthController.js';
import { router } from './router-config.js';

class App {

  AuthController = new AuthController()
  router = router

}


const app = new App()
AppState.init()
// @ts-ignore
window.app = app
