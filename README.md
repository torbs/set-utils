# set-utils
Utility methods for working with Sets


## Methods

<dl>
<dt><a href="#toArray">toArray</a> ⇒ <code>Array</code></dt>
<dd><p>Converts a Set to an Array</p>
</dd>
<dt><a href="#map">map(set, cb)</a> ⇒ <code>Set</code></dt>
<dd><p>The map() method creates a new Set with the results of calling a provided function on every element in this Set</p>
</dd>
<dt><a href="#filter">filter(set, cb)</a> ⇒ <code>Set</code></dt>
<dd><p>The filter() method creates a new Set with all elements that pass the test implemented by the provided function</p>
</dd>
<dt><a href="#union">union(sets)</a> ⇒ <code>Set</code></dt>
<dd><p>The union() method returns a new Set comprised of the Sets provided as arguments.</p>
</dd>
<dt><a href="#intersect">intersect(set)</a> ⇒ <code>Set</code></dt>
<dd><p>Creates a Set of unique values that are included in all given sets.</p>
</dd>
<dt><a href="#diff">diff(set1, sets)</a> ⇒ <code>Set</code></dt>
<dd><p>Creates a Set of values not included in the other given sets.</p>
</dd>
<dt><a href="#join">join(set, separator)</a> ⇒ <code>String</code></dt>
<dd><p>The join() method joins all elements of a Set into a string.</p>
</dd>
<dt><a href="#stringifyReplacer">stringifyReplacer()</a></dt>
<dd><p>A replacer function for use with JSON.stringify. Converts Set to an Array in JSON.</p>
</dd>
</dl>

<a name="toArray"></a>

## toArray ⇒ <code>Array</code>
Converts a Set to an Array

**Kind**: global variable  
**Returns**: <code>Array</code> - The converted Set  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> | The Sets that should be converted to an Array |

<a name="map"></a>

## map(set, cb) ⇒ <code>Set</code>
The map() method creates a new Set with the results of calling a provided function on every element in this Set

**Kind**: global function  
**Returns**: <code>Set</code> - The Set after mapping operation has been perfomed  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> | The set you want to perform the mapping operation on |
| cb | <code>function</code> | https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map |

<a name="filter"></a>

## filter(set, cb) ⇒ <code>Set</code>
The filter() method creates a new Set with all elements that pass the test implemented by the provided function

**Kind**: global function  
**Returns**: <code>Set</code> - The resulting Set after the filter operation  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> | The Set you want to filter |
| cb | <code>function</code> | Function to test each element of the Set. Return true to keep the element, false otherwise |

<a name="union"></a>

## union(sets) ⇒ <code>Set</code>
The union() method returns a new Set comprised of the Sets provided as arguments.

**Kind**: global function  
**Returns**: <code>Set</code> - The new concatinated Set  

| Param | Type | Description |
| --- | --- | --- |
| sets | <code>Set</code> | The Sets you want to concatinate |

<a name="intersect"></a>

## intersect(set) ⇒ <code>Set</code>
Creates a Set of unique values that are included in all given sets.

**Kind**: global function  
**Returns**: <code>Set</code> - The intersection of the Sets given as arguments  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> | Two or more Sets you want to intersect. |

<a name="diff"></a>

## diff(set1, sets) ⇒ <code>Set</code>
Creates a Set of values not included in the other given sets.

**Kind**: global function  
**Returns**: <code>Set</code> - The new Set of filtered values  

| Param | Type | Description |
| --- | --- | --- |
| set1 | <code>Set</code> | The Set to inspect |
| sets | <code>Set</code> | The values to exclude |

<a name="join"></a>

## join(set, separator) ⇒ <code>String</code>
The join() method joins all elements of a Set into a string.

**Kind**: global function  
**Returns**: <code>String</code> - A string result of every element in the Set  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> | The Set you want to join |
| separator | <code>String</code> | Optional. Specifies string you want to separate the elements of the Set |

<a name="stringifyReplacer"></a>

## stringifyReplacer()
A replacer function for use with JSON.stringify. Converts Set to an Array in JSON.

