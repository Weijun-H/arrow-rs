searchState.loadedDescShard("arrow_data", 0, "Low-level array data abstractions for Apache Arrow Rust\nBuffer is always null. Unused currently in Rust …\nA generic representation of Arrow array data which …\nBuilder for <code>ArrayData</code> type\nBuffer holds a bitmap.\nLayout specification for a single data type buffer\nHelper to access views of <code>GenericByteViewArray</code> (…\nLayout specification for a data type\nEach element is a fixed width primitive, with the given …\nVariable width, such as string data for utf8 data\nTypes for iterating over packed bitmasks\nUtils for working with packed bit masks\nThe buffer index.\nThe buffers for this array data. Note that depending on …\nA vector of buffer layout specifications, one for each …\nCan contain a null bitmask\nThe child(ren) of this array. Only non-empty for nested …\nContains <code>ArrayData</code>, a generic representation of Arrow …\nThe data type for this array data\nModule containing functionality to compute array equality. …\nContains declarations to bind to the C Data Interface.\nReturn the expected <code>DataTypeLayout</code> Arrays of this data …\nThe number of elements in this array data\nThe length of the string/bytes.\nThe null bitmap. A <code>None</code> value for this indicates all …\nThe offset into this array data, in number of items\nThe offset into the buffer.\nFirst 4 bytes of string/bytes data.\nValidates the combination of <code>views</code> and <code>buffers</code> is a valid …\nValidates the combination of <code>views</code> and <code>buffers</code> is a valid …\nThis field only applies to the view type …\nAn iterator of <code>usize</code> whose index in a provided bitmask is …\nIterator over the bits within a packed bitmask\nIterator of contiguous ranges of set bits within a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new <code>BitIterator</code> from the provided <code>buffer</code>, and …\nCreate a new <code>BitSliceIterator</code> from the provided <code>buffer</code>, …\nCreate a new <code>BitIndexIterator</code> from the provide <code>buffer</code>, and …\nCalls the provided closure for each index in the provided …\nUtil function to set bits in a slice of bytes.\nHelper to access views of <code>GenericByteViewArray</code> (…\nThe buffer index.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe length of the string/bytes.\nThe offset into the buffer.\nFirst 4 bytes of string/bytes data.\nValidates the combination of <code>views</code> and <code>buffers</code> is a valid …\nValidates the combination of <code>views</code> and <code>buffers</code> is a valid …\nBuffer is always null. Unused currently in Rust …\nA generic representation of Arrow array data which …\nBuilder for <code>ArrayData</code> type\nBuffer holds a bitmap.\nLayout specification for a single data type buffer\nLayout specification for a data type\nEach element is a fixed width primitive, with the given …\nVariable width, such as string data for utf8 data\nVerifies that the buffers meet the minimum alignment …\nReturns the <code>buffer</code> as a slice of type <code>T</code> starting at …\nReturns the <code>Buffer</code> storing data for this <code>ArrayData</code>\nThe buffers for this array data. Note that depending on …\nA vector of buffer layout specifications, one for each …\nCreates an array data, validating all inputs\nCreates an array data, validating all inputs, and aligning …\nSame as <code>Self::build_unchecked</code> but ignoring <code>force_validate</code> …\nCreates an array data, without any validation\nReturns a builder to construct a <code>ArrayData</code> instance of the …\nCan contain a null bitmask\nValidates that each value in self.buffers (typed as T) is …\nValidates that each value in run_ends array is positive …\nReturns a slice of children <code>ArrayData</code>. This will be non …\nThe child(ren) of this array. Only non-empty for nested …\nReturns a reference to the <code>DataType</code> of this <code>ArrayData</code>\nThe data type for this array data\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the total number of bytes of memory occupied …\nReturns the total number of bytes of memory occupied by the\nEnsures that this array data has a single child_data with …\nReturns the total number of the bytes of memory occupied by\nEnsures that <code>child_data[i]</code> has the expected type, calls …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this <code>ArrayData</code> into an <code>ArrayDataBuilder</code>\nReturns whether this <code>ArrayData</code> is empty\nReturns whether the element at index <code>i</code> is null\nReturns whether the element at index <code>i</code> is not null\nReturn the expected <code>DataTypeLayout</code> Arrays of this data …\nReturns the length (i.e., number of elements) of this …\nThe number of elements in this array data\nDescribes a basic numeric array where each element has a …\ncreates 2 <code>MutableBuffer</code>s with a given <code>capacity</code> (in slots).\nReturns a new empty ArrayData valid for <code>data_type</code>.\nDescribes arrays which have no data of their own (e.g. …\nDescribes a basic numeric array where each element has …\nDescribes a list view type\nReturns a new <code>ArrayData</code> valid for <code>data_type</code> containing <code>len</code> …\nDescribes arrays which have no data of their own but may …\nCreate a new ArrayData instance;\nDescribes a view type\nReturns the total number of nulls in this array\nReturns a reference to the null buffer of this <code>ArrayData</code> …\nThe null bitmap. A <code>None</code> value for this indicates all …\nReturns the offset of this <code>ArrayData</code>\nThe offset into this array data, in number of items\nReturns true if this <code>ArrayData</code> is equal to <code>other</code>, using …\nCreates a zero-copy slice of itself. This creates a new …\nCreate a new ArrayData, validating that the provided …\nReturns a reference to the data in <code>buffers[idx]</code> as a typed …\nReturns a reference to the data in <code>buffer</code> as a typed slice …\n“cheap” validation of an <code>ArrayData</code>. Ensures buffers are\nValidates the layout of <code>child_data</code> ArrayData structures\nValidate that the data contained within this <code>ArrayData</code> is …\nCalls the <code>validate(item_index, range)</code> function for each of …\nPerforms a full recursive validation of this <code>ArrayData</code> and …\nVerifies that <code>child</code> contains no nulls not present in <code>mask</code>\nValidates the values stored within this <code>ArrayData</code> are valid\nReturns <code>Err</code> if self.child_data does not have exactly …\nDoes a cheap sanity check that the <code>self.len</code> values in …\nDoes a cheap sanity check that the <code>self.len</code> values in …\nEnsures that all offsets in <code>buffers[0]</code> into <code>buffers[1]</code> are …\nEnsures that all strings formed by the offsets in …\nValidates the values stored within this <code>ArrayData</code> are valid\nThis field only applies to the view type …\nThe maximum precision for DataType::Decimal128 values\nThe maximum scale for DataType::Decimal128 values\nThe maximum precision for DataType::Decimal256 values\nThe maximum scale for DataType::Decimal256 values\nThe default scale for DataType::Decimal128 and …\nMAX decimal256 value of little-endian format for each …\n<code>MAX_DECIMAL_FOR_EACH_PRECISION[p-1]</code> holds the maximum <code>i128</code> …\n<code>MAX_DECIMAL_FOR_EACH_PRECISION_ONE_BASED[p]</code> holds the …\nMIN decimal256 value of little-endian format for each …\n<code>MIN_DECIMAL_FOR_EACH_PRECISION[p-1]</code> holds the minimum <code>i128</code> …\n<code>MIN_DECIMAL_FOR_EACH_PRECISION[p]</code> holds the minimum <code>i128</code> …\nDetermines whether the specified <code>i256</code> value can be properly\nDetermines whether the specified <code>i128</code> value can be properly\nValidates that the specified <code>i256</code> of value can be properly …\nValidates that the specified <code>i128</code> value can be properly …\nLogically compares two ArrayData.\nCompares the values of two ArrayData starting at <code>lhs_start</code> …\nReturns true if the value data for the arrays is equal, …\nThe current implementation of comparison of run array …\nCompares the values of two ArrayData starting at <code>lhs_start</code> …\nABI-compatible struct for ArrowArray from C Data Interface …\nAligns the provided <code>nulls</code> to the provided <code>data_offset</code>\nReturns the buffer at the provided index\nReturns the child at the provided index\nReturns the dictionary if any\ncreate an empty <code>FFI_ArrowArray</code>, which can be used to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nTakes ownership of the pointed to <code>FFI_ArrowArray</code>\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nwhether the array is empty\nWhether the array has been released\nthe length of the array\ncreates a new <code>FFI_ArrowArray</code> from existing data.\nthe null count of the array\nReturns the number of buffers\nReturns the number of children\nthe offset of the array\nDon’t preallocate inner buffers and rely on array growth …\nBinary, Utf8 and LargeUtf8 data types\nDefine capacities to pre-allocate for child data or data …\nDictionary type\nList and LargeList data types\nEfficiently create an ArrayData from one or more existing …\nStruct type\nA mutable ArrayData that knows how to freeze itself into …\nInput arrays: the data being read FROM.\nBuilds an extend that adds <code>offset</code> to the source primitive …\nBuilds an extend that adds <code>buffer_offset</code> to any buffer …\nIn progress output array: The data being written TO\nThe child data of the <code>Array</code> in Dictionary arrays.\nExtends the in progress array with a region of the input …\nfunction used to extend the output array with nulls from …\nExtends the in progress array with null elements, ignoring …\nfunction used to extend the output array with null …\nfunction used to extend output array with values from …\nCreates a ArrayData from the in progress array, consuming …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsume self and returns the in progress array as …\nReturns true if len is 0\nReturns the current length\nReturns a new MutableArrayData with capacity to <code>capacity</code> …\nReturns the current null count\nVariadic data buffers referenced by views.\nSimilar to MutableArrayData::new, but lets users define the\nextends the <code>buffer</code> to be able to hold <code>len</code> bits, setting …")