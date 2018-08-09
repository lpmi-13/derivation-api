# derivation-api
a simple API to send back words grouped by morpheme

the idea is that there is no easy place for students to find out which English words are related in terms of derivational morphology.

As an example, the following list:
- position (noun or verb)
- positional (adjective)
- reposition (verb)
- pose (noun or verb)
- positionally (adverb)

is made up of words that are related in meaning, but span multiple parts of speech. There's currently no easy place to go to find lists of such words, as a thesaurus only presents synonyms.

This is presented as the seed of a solution that would be easily searchable via a web interface, and possibly also expanded to include simple quizzes/games based on the data.

---

fire it up with

`npm run dev`

all nice and babelified!

once the server is running, the endpoint will be

`https://SERVER/?word=WORD`

and an example response will look like

```
[{"word":"pose","word_class":"N"},{"word":"pose","word_class":"V"},{"word":"poser","word_class":"N"},{"word":"posit","word_class":"V"},{"word":"posing","word_class":"N"},{"word":"position","word_class":"N"},{"word":"position","word_class":"V"},{"word":"positive","word_class":"N"},{"word":"positive","word_class":"AJ"},{"word":"positioner","word_class":"N"},{"word":"positivity","word_class":"N"},{"word":"positional","word_class":"AJ"},{"word":"positioning","word_class":"N"},{"word":"positively","word_class":"AV"},{"word":"positioning","word_class":"AJ"},{"word":"positiveness","word_class":"N"},{"word":"positionable","word_class":"AJ"}]
```

currently live at https://micromaterials.org/derivation-api

all data from original source at https://clipdemos.umiacs.umd.edu/catvar/

(note: it expects a mongo database instance to have the data in it, though that implementation detail hasn't been included here.)
