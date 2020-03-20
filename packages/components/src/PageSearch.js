import React, { useState, useRef, useEffect } from 'react'
import Mark from 'mark.js'
import { Box, Flex } from 'theme-ui'

const PageSearch = React.forwardRef(
  (
    {
      searchId = 'content',
      variant = 'pagesearch',
      controls = true,
      sticky = false,
      markBg = 'orange',
      currentMarkBg = 'blue',
      offsetTop = 50,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef(null)
    const [search, setSearch] = useState('')
    const [index, setIndex] = useState(0)
    const [results, setResults] = useState([])
    const content = document.querySelector(`#${searchId}`)

    useEffect(() => {
      const instance = new Mark(content)

      instance.unmark({
        done: () => {
          instance.mark(search, { className: 'eui-mark' })
          setResults(document.querySelectorAll('.eui-mark'))
          setIndex(0)
        },
      })
    }, [search])

    function jumpTo() {
      const current = results[index]
      const position = current.offsetTop - offsetTop
      current.classList.add('current-mark')
      window.scrollTo(0, position)
    }

    const clear = e => {
      setSearch('')
      inputRef.current.focus()
    }

    const prev = e => {
      if (index === 0) {
        setIndex(results.length - 1)
      } else {
        setIndex(index - 1)
      }
      jumpTo()
    }

    const next = e => {
      if (index === results.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
      jumpTo()
    }

    // Add global styles =
    // '.eui-mark': {
    //         bg: markBg,
    //       },
    //       '.current-mark': {
    //         bg: currentMarkBg,
    //       }

    return (
      <Flex
        ref={ref}
        variant={variant}
        {...props}
        __css={{
          alignItems: 'stretch',
          position: sticky ? 'sticky' : 'relative',
          top: 0,
        }}>
        <Box as="form" role="search" aria-label="On this page">
          <input
            ref={inputRef}
            type="search"
            name="search"
            placeholder="Search this page..."
            value={search}
            onChange={e => setSearch(e.target.value)}></input>
        </Box>
        {controls && (
          <React.Fragment>
            <button
              title="Previous result"
              onClick={results.length ? prev : null}>
              Prev
            </button>
            <button title="Next result" onClick={results.length ? next : null}>
              Next
            </button>
          </React.Fragment>
        )}
        <button onClick={clear}>Clear</button>
      </Flex>
    )
  }
)

export default PageSearch
