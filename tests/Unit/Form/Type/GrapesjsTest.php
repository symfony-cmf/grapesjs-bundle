<?php

/*
 * This file is part of the Symfony CMF package.
 *
 * (c) 2011-2017 Symfony CMF
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\Cmf\Bundle\TreeBrowserBundle\Tests\Unit\Form\Type;

use Symfony\Cmf\Bundle\GrapesjsBundle\Form\Type\GrapesInput;
use Symfony\Component\Form\Test\TypeTestCase;

class GrapesjsTest extends TypeTestCase
{
    public function testSubmitText()
    {
        $form = $this->factory->create(GrapesInput::class);

        $form->submit('/cms/content/about');

        $this->assertEquals('/cms/content/about', $form->getData());
    }
}
