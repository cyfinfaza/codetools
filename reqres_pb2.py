# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: reqres.proto

from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='reqres.proto',
  package='',
  syntax='proto2',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x0creqres.proto\"|\n\x07Request\x12\n\n\x02id\x18\x01 \x01(\t\x12\x13\n\x0binputMethod\x18\x02 \x01(\t\x12\x17\n\x0finputMethodName\x18\x03 \x01(\t\x12\x16\n\x0esolutionMethod\x18\x04 \x01(\t\x12\x0e\n\x06inputs\x18\x05 \x03(\t\x12\x0f\n\x07timeout\x18\x06 \x01(\x03\"\x95\x01\n\x08Response\x12\n\n\x02id\x18\x01 \x01(\t\x12\x32\n\x11overallResultType\x18\x02 \x02(\x0e\x32\x17.Response.RunResultType\x12\x18\n\x07results\x18\x03 \x03(\x0b\x32\x07.Output\"/\n\rRunResultType\x12\x0b\n\x07Success\x10\x00\x12\x11\n\rCompilerError\x10\x01\"\xa1\x01\n\x06Output\x12\x16\n\x0esolutionOutput\x18\x01 \x02(\t\x12-\n\x12solutionOutputType\x18\x02 \x02(\x0e\x32\x11.OutputResultType\x12\x14\n\x0cmethodOutput\x18\x03 \x02(\t\x12+\n\x10methodOutputType\x18\x04 \x02(\x0e\x32\x11.OutputResultType\x12\r\n\x05match\x18\x05 \x02(\x08*i\n\x10OutputResultType\x12\x0b\n\x07Success\x10\x00\x12\x10\n\x0cRuntimeError\x10\x01\x12\x11\n\rSecurityError\x10\x02\x12\x11\n\rCompilerError\x10\x03\x12\x10\n\x0cTimeoutError\x10\x04'
)

_OUTPUTRESULTTYPE = _descriptor.EnumDescriptor(
  name='OutputResultType',
  full_name='OutputResultType',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='Success', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='RuntimeError', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='SecurityError', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='CompilerError', index=3, number=3,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='TimeoutError', index=4, number=4,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=458,
  serialized_end=563,
)
_sym_db.RegisterEnumDescriptor(_OUTPUTRESULTTYPE)

OutputResultType = enum_type_wrapper.EnumTypeWrapper(_OUTPUTRESULTTYPE)
Success = 0
RuntimeError = 1
SecurityError = 2
CompilerError = 3
TimeoutError = 4


_RESPONSE_RUNRESULTTYPE = _descriptor.EnumDescriptor(
  name='RunResultType',
  full_name='Response.RunResultType',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='Success', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='CompilerError', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=245,
  serialized_end=292,
)
_sym_db.RegisterEnumDescriptor(_RESPONSE_RUNRESULTTYPE)


_REQUEST = _descriptor.Descriptor(
  name='Request',
  full_name='Request',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='Request.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='inputMethod', full_name='Request.inputMethod', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='inputMethodName', full_name='Request.inputMethodName', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='solutionMethod', full_name='Request.solutionMethod', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='inputs', full_name='Request.inputs', index=4,
      number=5, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='timeout', full_name='Request.timeout', index=5,
      number=6, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=16,
  serialized_end=140,
)


_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='Response.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='overallResultType', full_name='Response.overallResultType', index=1,
      number=2, type=14, cpp_type=8, label=2,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='results', full_name='Response.results', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _RESPONSE_RUNRESULTTYPE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=143,
  serialized_end=292,
)


_OUTPUT = _descriptor.Descriptor(
  name='Output',
  full_name='Output',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='solutionOutput', full_name='Output.solutionOutput', index=0,
      number=1, type=9, cpp_type=9, label=2,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='solutionOutputType', full_name='Output.solutionOutputType', index=1,
      number=2, type=14, cpp_type=8, label=2,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='methodOutput', full_name='Output.methodOutput', index=2,
      number=3, type=9, cpp_type=9, label=2,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='methodOutputType', full_name='Output.methodOutputType', index=3,
      number=4, type=14, cpp_type=8, label=2,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='match', full_name='Output.match', index=4,
      number=5, type=8, cpp_type=7, label=2,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=295,
  serialized_end=456,
)

_RESPONSE.fields_by_name['overallResultType'].enum_type = _RESPONSE_RUNRESULTTYPE
_RESPONSE.fields_by_name['results'].message_type = _OUTPUT
_RESPONSE_RUNRESULTTYPE.containing_type = _RESPONSE
_OUTPUT.fields_by_name['solutionOutputType'].enum_type = _OUTPUTRESULTTYPE
_OUTPUT.fields_by_name['methodOutputType'].enum_type = _OUTPUTRESULTTYPE
DESCRIPTOR.message_types_by_name['Request'] = _REQUEST
DESCRIPTOR.message_types_by_name['Response'] = _RESPONSE
DESCRIPTOR.message_types_by_name['Output'] = _OUTPUT
DESCRIPTOR.enum_types_by_name['OutputResultType'] = _OUTPUTRESULTTYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Request = _reflection.GeneratedProtocolMessageType('Request', (_message.Message,), {
  'DESCRIPTOR' : _REQUEST,
  '__module__' : 'reqres_pb2'
  # @@protoc_insertion_point(class_scope:Request)
  })
_sym_db.RegisterMessage(Request)

Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), {
  'DESCRIPTOR' : _RESPONSE,
  '__module__' : 'reqres_pb2'
  # @@protoc_insertion_point(class_scope:Response)
  })
_sym_db.RegisterMessage(Response)

Output = _reflection.GeneratedProtocolMessageType('Output', (_message.Message,), {
  'DESCRIPTOR' : _OUTPUT,
  '__module__' : 'reqres_pb2'
  # @@protoc_insertion_point(class_scope:Output)
  })
_sym_db.RegisterMessage(Output)


# @@protoc_insertion_point(module_scope)
