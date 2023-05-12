package controllers

import play.api.mvc._

import javax.inject._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class WebinarController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {
   
  
    def index() = Action { implicit request: Request[AnyContent] =>
        Ok(views.html.webinar("nl"))
    }

    def thankyou() = Action { implicit request: Request[AnyContent] =>
        Ok(views.html.thankyou("nl"))
    }


}
