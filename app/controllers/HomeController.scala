package controllers

import play.api.mvc._

import javax.inject._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index() = Action { implicit request: Request[AnyContent] =>
    val host: String = request.host
    val lang: String = request.headers.get("Accept-Language").getOrElse("en") 
    (host, lang) match { 
      case (h, _) if h.endsWith("lunatech.fr") => Redirect(routes.HomeController.fr())
      case (_, l) if l.startsWith("fr") => Redirect(routes.HomeController.fr())
      case _ => Ok(views.html.index("en"))
    }
  }

  def fr() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.fr("fr"))
  }

  def en() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index("en"))
  }
}
