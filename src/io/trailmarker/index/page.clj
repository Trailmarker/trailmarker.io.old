(ns io.trailmarker.index.page
  (:use [hiccup.core :only (html)]
        [hiccup.page :refer (html5 include-css include-js)]))


(defn render [{global-meta :meta posts :entries}]
  (html5 {:lang "en" :itemtype "http://schema.org/Blog"}
         [:head
          [:title (:site-title global-meta)]
          [:meta {:charset "utf-8"}]
          [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"}]
          [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0, user-scalable=no"}]
          (include-css "https://fonts.googleapis.com/css?family=Merriweather")
          (include-css "css/trailmarker.css")
          (include-js "//code.jquery.com/jquery-3.1.1.slim.min.js")]
         [:body
          [:div.jumbo.a-fadein
           [:h1 "Trailmarker"]
           #_[:p "App development. Spatial technology. Clojure."]
           [:p.rot13-email "vasb@genvyznexre.vb"]
           #_[:p.rot13-phone "+38 565 070 712"]]
          [:script {:src "index/script.js"}]
          #_[:ul
             [:li [:a {:href "/about.html"} "About Page"]]
             [:li [:a {:href "/feed.rss"} "RSS"]]
             [:li [:a {:href "/atom.xml"} "Atom Feed"]]]
          #_[:ul.items.columns.small-12
             (for [post posts]
               [:li
                [:a {:href (:permalink post)}(:title post)]])]]))
