(set-env!
  :source-paths #{"src"}
  :resource-paths #{"resources"}
  :dependencies '[[perun "0.4.2-SNAPSHOT"]
                  [hiccup "1.0.5" :exclusions [org.clojure/clojure]]
                  [thheller/shadow-cljs "2.6.24"]
                  [pandeiro/boot-http "0.6.3-SNAPSHOT"]
                  [org.clojure/data.json "0.2.6"]
                  [clj-time "0.13.0"]
                  [deraen/boot-sass "0.3.1" :scope "test"]])

(require '[clojure.string :as str]
         '[clojure.data.json :as json]
         '[boot.core :as boot]
         '[io.perun :as perun]
         '[pandeiro.boot-http :refer [serve]]
         '[deraen.boot-sass :refer [sass]])

(task-options!
 sass {:source-map true})

(deftask build
  "Build trailmarker.io." 
  []
  (comp
        (perun/global-metadata)
        (perun/markdown)
        #_(perun/draft)
        (perun/print-meta)
        (perun/slug)
        #_(perun/ttr)
        (perun/word-count)
        #_(perun/build-date)
        (perun/gravatar :source-key :author-email :target-key :author-gravatar)
        #_(perun/render :renderer 'io.trailmarker.post/render)
        (perun/collection :renderer 'io.trailmarker.index.page/render :page "index.html")
        #_(perun/tags :renderer 'io.trailmarker.tags/render)
        #_(perun/paginate :renderer 'io.trailmarker.paginate/render)
        #_(perun/assortment :renderer 'io.trailmarker.assortment/render
                          :grouper (fn [entries]
                                     (->> entries
                                          (mapcat (fn [entry]
                                                    (if-let [kws (:keywords entry)]
                                                      (map #(-> [% entry]) (str/split kws #"\s*,\s*"))
                                                      [])))
                                          (reduce (fn [result [kw entry]]
                                                    (let [path (str kw ".html")]
                                                      (-> result
                                                          (update-in [path :entries] conj entry)
                                                          (assoc-in [path :entry :keyword] kw))))
                                                  {}))))
        #_(perun/static :renderer 'io.trailmarker.about/render :page "about.html")
        #_(perun/inject-scripts :scripts #{"contacts.js"})
        (perun/sitemap)
        #_(perun/rss :description "Hashobject blog")
        #_(perun/atom-feed :filterer :original)
        #_(perun/print-meta)
        (sass)
        (target)
        #_(notify)))

(deftask dev
  []
  (comp (watch)
        (build)
        (serve :resource-root "public")))
