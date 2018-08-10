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


(note: it expects a mongo database instance to have the data in it, though that implementation detail hasn't been included here.)

## References

The following is the database source, and please cite this as the database source if you are using this code.

Habash, N., & Dorr, B. (2003). [*A categorial variation database for English*](http://www.anthology.aclweb.org/N/N03/N03-1013.pdf). In Proceedings of the 2003 Conference of the North American Chapter of the Association for Computational Linguistics (pp. 17-23). 

the database is provided for research purposes only; and commercial use must be discussed with [University of Maryland office of technology commercialization](http://www.otc.umd.edu/).
