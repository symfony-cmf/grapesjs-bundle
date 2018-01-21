#######################################################
# DO NOT EDIT THIS FILE!                              #
#                                                     #
# It's auto-generated by symfony-cmf/dev-kit package. #
#######################################################

############################################################################
# This file is part of the Symfony CMF package.                            #
#                                                                          #
# (c) 2011-2017 Symfony CMF                                                #
#                                                                          #
# For the full copyright and license information, please view the LICENSE  #
# file that was distributed with this source code.                         #
############################################################################

TESTING_SCRIPTS_DIR=vendor/symfony-cmf/testing/bin
CONSOLE=${TESTING_SCRIPTS_DIR}/console
VERSION=dev-master
ifdef BRANCH
	VERSION=dev-${BRANCH}
endif
PACKAGE=symfony-cmf/tree-browser-bundle
list:
	@echo 'test:                    will run all tests'
	@echo 'unit_tests:               will run unit tests only'


	@echo 'test_installation:    will run installation test'
include ${TESTING_SCRIPTS_DIR}/make/unit_tests.mk
include ${TESTING_SCRIPTS_DIR}/make/test_installation.mk

.PHONY: test
test: unit_tests
