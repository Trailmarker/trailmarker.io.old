(ns io.trailmarker.index.rot13-contacts
  (:require [clojure.string :refer [replace]]
            #_["jquery/jquery.min" :as $]))

(defn- make-rot13
  "Make a Rot-13 lookup table as a hash-map."
  [start]
  (->> (for [from (range 27),
             :let [to (mod (+ 13 from) 26)]]
         [(char (+ start from)) (char (+ start to))])
       (into {})))

(let [table (merge (make-rot13 97) ; lowercase
                   (make-rot13 65) ; uppercase
                   {\0 \9, \1 \8, \2 \7, \3 \6, \4 \5,
                    \5 \4, \6 \3, \7 \2, \8 \1, \9 \0})] ; numbers
  (defn- rot13 [plaintext]
    (apply str (map #(get table % %) plaintext)))

  (let [rotor (fn [selector link-type]
                  (.each (js/$ selector)
                         (fn [_ el]
                           (let [el$ (js/$ el)
                                 rot (rot13 (.text el$))]
                             (.replaceWith el$
                                           (str "<p><a href=\"" link-type ":" rot
                                                "\">" rot "</a></p>"))))))]
    (rotor "p.rot13-email" "mailto")
    (rotor "p.rot13-phone" "tel")))
