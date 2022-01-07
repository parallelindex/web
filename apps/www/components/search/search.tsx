import { useEffect, useReducer } from 'react';
import * as JsSearch from 'js-search';

import { ListItem } from '../list';
import { SearchStitch } from './stitch';

import { ListCSS } from '../list/stitch';

import type { Company } from 'types';

const { Form, Icon, Input, Result, Results, NoResults } = SearchStitch;

const initialState = {
  isError: false,
  isLoading: true,
  search: [],
  searchResults: [],
  searchQuery: '',
  totalData: [],
};

function SearchReducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case 'SET_DATA':
      return {
        ...state,
        totalData: payload,
      };
    case 'SET_SEARCH':
      return {
        ...state,
        search: payload,
        isLoading: false,
      };
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: payload.searchQuery,
        searchResults: payload.searchResults,
      };
    default:
      return state;
  }
}

function buildIndex(searchData: [Company]) {
  const search = new JsSearch.Search('name');

  search.indexStrategy = new JsSearch.PrefixIndexStrategy();
  search.sanitizer = new JsSearch.LowerCaseSanitizer();
  search.searchIndex = new JsSearch.TfIdfSearchIndex();

  search.addIndex('name');

  search.addDocuments(searchData);

  return search;
}

export function Search({ dataset }: { dataset?: [Company] }) {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  function searchData(input) {
    const { search } = state;
    const queryResult = search.search(input.target.value);

    dispatch({
      type: 'SET_SEARCH_QUERY',
      payload: { searchQuery: input.target.value, searchResults: queryResult },
    });
  }

  useEffect(() => {
    if (dataset && dataset.length > 0) {
      dispatch({ type: 'SET_DATA', payload: dataset });
      const dataToSearch = buildIndex(dataset);
      dataToSearch && dispatch({ type: 'SET_SEARCH', payload: dataToSearch });
    }
  }, [dataset]);

  const { searchResults, searchQuery } = state;
  const queryResults = searchResults;

  if (!dataset)
    return (
      <Form>
        <Icon />
        <Input
          id="Search"
          type="search"
          value={searchQuery}
          onChange={searchData}
          placeholder="Search by name or category"
        />
      </Form>
    );

  return (
    <Form>
      <Icon />
      <Input
        id="Search"
        type="search"
        value={searchQuery}
        onChange={searchData}
        placeholder="Search by name or category"
      />
      <Result>
        {queryResults.length === 0 && searchQuery !== '' && (
          <NoResults>No results</NoResults>
        )}
        {queryResults.length !== 0 && (
          <Results className={ListCSS()}>
            {queryResults.map(
              ({
                id,
                category,
                description,
                gab,
                images,
                logo,
                name,
                website,
                uuid,
              }: Company) => {
                return (
                  <ListItem
                    id={id}
                    key={uuid}
                    category={category}
                    description={description}
                    gab={gab}
                    images={images}
                    inlineStyles
                    logo={logo}
                    name={name}
                    uuid={uuid}
                    website={website}
                  />
                );
              },
            )}
          </Results>
        )}
      </Result>
    </Form>
  );
}
